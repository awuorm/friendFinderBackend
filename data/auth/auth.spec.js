const request = require("supertest");
const server = require("../../server");
const db = require("../dbConfig");
// const authModel = require("./authModel");

beforeEach(async () => {
  await db("users").truncate();
});

describe("testing authentication endpoints", () => {
  describe("testing register endpoint", () => {
    // test("user is created successfully", async () => {
    //   await authModel.add({ username: "mildredaa", password: "1234" });
    //   const user = await db("users");
    //   expect(user).toHaveLength(1);
    // });
    test("returns 201 created status", async () => {
      const response = await request(server)
        .post("/api/auth/register")
        .send({ username: "grace", password: "1234" });
      expect(response.status).toBe(201);
    });
  });
  describe("testing login endpoint", () => {
    test("user can login", async () => {
      const response = await request(server)
        .post("/api/auth/register")
        .send({ username: "mildreda", password: "1234" });
      expect(response.status).toBe(201);
      const response2 = await request(server)
        .post("/api/auth/login")
        .send({ username: "mildreda", password: "1234" });
      expect(response2.status).toBe(200);
    });
    test("user can't login with wrong password", async () => {
      const response = await request(server)
        .post("/api/auth/register")
        .send({ username: "dina", password: "1234" });
      const response2 = await request(server)
        .post("/api/auth/login")
        .send({ username: "dina", password: "12345" });
      expect(response2.status).toBe(403);
    });
    describe("testing users endpoint", () => {
      test("can get all users in db", async () => {
        const response = await request(server)
          .post("/api/auth/register")
          .send({ username: "diana", password: "1234" });
        expect(response.status).toBe(201);
        const response2 = await request(server)
          .post("/api/auth/login")
          .send({ username: "diana", password: "1234" });
          expect(response2.status).toBe(200);
        //   const token = response2.body.token;
        // const response3 = await request(server)
        //   .get("api/auth/users")
        //   .set("authorization", token);
        // console.log(response3);
        // expect(response3.status).toBe(200);
      });
    });
  });
});
