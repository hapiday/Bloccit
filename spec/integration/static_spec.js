const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";
const marcoBase = "http://localhost:3000/marco";
const aboutBase = "http://localhost:3000/about";

describe("routes : static", () => {

  describe("GET /", () => {

    it("should return status code 200 and have 'Welcome to Bloccit' in the body of the response", (done) => {

      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(body).toContain("Welcome to Bloccit");

        done();
      });
    });

      it("should return status code 200", (done) => {
        request.get(marcoBase, (err, res, body) => {
          expect(res.statusCode).toBe(200);
          done();
        });
      });

      it("response body should return string 'Polo'", (done) => {
        request.get(marcoBase, (err, res, body) => {
          expect(body).toContain('Polo');
          done();
        });
      });
      it("response body should contain string 'About Us'", (done) => {
        request.get(aboutBase, (err, res, body) => {
          expect(body).toContain('About Us');
          done();
        });
      });
    });
});
