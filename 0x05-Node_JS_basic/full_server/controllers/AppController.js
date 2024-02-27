/**
 * Contains the miscellaneous route handlers.
 * @author elvis <https://github.com/elvis-kimutai>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
