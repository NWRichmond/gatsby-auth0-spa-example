/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const clientRoutes = ['account']; // add all client-only routes to this array

exports.onCreatePage = async ({ page, actions }) => {
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  const { createPage } = actions;
  for (const route of clientRoutes) {
    const regexRoute = new RegExp(`/${route}`);
    const path = `/${route}/*`;
    if (page.path.match(regexRoute)) {
      page.matchPath = path;
      // Update the page.
      createPage(page);
    }
  }
};
