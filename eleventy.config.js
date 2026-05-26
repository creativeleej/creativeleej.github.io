// eleventy.config.js
// Place this file in the ROOT of your GitHub repository.
// This is the main configuration file for your Eleventy site.

const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {

  // ─────────────────────────────────────────────────────────
  // PLUGINS
  // ─────────────────────────────────────────────────────────

  // RSS feed — generates /feed.xml automatically
  eleventyConfig.addPlugin(pluginRss);


  // ─────────────────────────────────────────────────────────
  // PASSTHROUGH COPY
  // These folders are copied as-is to the built site (_site/).
  // Adjust the folder names to match what's in your repo.
  // ─────────────────────────────────────────────────────────

  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("script.js");
  eleventyConfig.addPassthroughCopy("credits.html");

  // Copy any root-level files browsers expect to find
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("privacy_policy.html");

  // If you have a CNAME file for your custom domain, copy it too
  eleventyConfig.addPassthroughCopy("CNAME");


  // ─────────────────────────────────────────────────────────
  // COLLECTIONS
  // ─────────────────────────────────────────────────────────

  // Blog posts — reads all .md files in /blog/posts/
  // Sorted newest first (reverse chronological)
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("blog/posts/*.md")
      .reverse();
  });

  // Featured posts — posts tagged "featured" appear on homepage
  // Usage in front matter:  tags: [posts, featured]
  eleventyConfig.addCollection("featured", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("blog/posts/*.md")
      .filter(post => post.data.tags && post.data.tags.includes("featured"))
      .reverse()
      .slice(0, 3); // max 3 featured posts
  });


  // ─────────────────────────────────────────────────────────
  // FILTERS
  // These are helper functions you can use in your templates.
  // ─────────────────────────────────────────────────────────

  // Format a date for display: "May 18, 2026"
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC"
    });
  });

  // Format a date for machine-readable HTML: "2026-05-18"
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return new Date(dateObj).toISOString().split("T")[0];
  });

  // Truncate text to N words (for post excerpts on the blog index)
  eleventyConfig.addFilter("truncate", (str, wordCount = 30) => {
    if (!str) return "";
    const words = str.split(/\s+/);
    if (words.length <= wordCount) return str;
    return words.slice(0, wordCount).join(" ") + "…";
  });

  // Strip HTML tags (useful for meta descriptions)
  eleventyConfig.addFilter("stripHtml", (str) => {
    if (!str) return "";
    return str.replace(/<[^>]*>/g, "");
  });


  // ─────────────────────────────────────────────────────────
  // SHORTCODES
  // Reusable snippets you can drop into any template or post.
  // ─────────────────────────────────────────────────────────

  // Usage in a .md post: {% callout "Pro tip: always test your prompts..." %}
  eleventyConfig.addShortcode("callout", function(text) {
    return `<div class="callout">${text}</div>`;
  });

  // Usage: {% year %} — outputs the current year (great for copyright notices)
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);


  // ─────────────────────────────────────────────────────────
  // WATCH TARGETS
  // Eleventy will reload the browser when these change.
  // ─────────────────────────────────────────────────────────

  eleventyConfig.addWatchTarget("css/");
  eleventyConfig.addWatchTarget("images/");


  // ─────────────────────────────────────────────────────────
  // MARKDOWN OPTIONS
  // ─────────────────────────────────────────────────────────

  const markdownIt = require("markdown-it");
  const md = markdownIt({
    html: true,        // allow raw HTML in .md files
    breaks: false,     // don't convert line breaks to <br>
    linkify: true,     // auto-link URLs
    typographer: true  // smart quotes, em-dashes, etc.
  });
  eleventyConfig.setLibrary("md", md);


  // ─────────────────────────────────────────────────────────
  // DIRECTORY CONFIGURATION
  // ─────────────────────────────────────────────────────────

  // Ignore files that aren't templates
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("SETUP_README.md");

  return {
    // Template languages
    templateFormats: ["md", "html", "njk"],

    // Which template language to use for .html and .md files
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",

    // Directory structure
    dir: {
      input:    ".",           // source: repo root
      output:   "_site",      // built site (gitignored)
      includes: "_includes",  // partials (nav, footer, head snippets)
      layouts:  "_layouts",   // page wrapper templates
      data:     "_data"       // global data files (JSON/JS)
    }
  };
};
