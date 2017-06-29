module.exports = {
  plugins: {
    istanbul: {
      dir: "./coverage",
      reporters: ["text-summary", "lcov"],
      include: [
        "/t-header/t-header.html"
      ],
      exclude: [
        "/polymer/polymer.js",
        "/wecomponentsjs/webcomponents-lite.js"
      ]
    }
  }
}
