const request = require("supertest");
const server = require("../../server");
const db = require("../dbConfig");
const questionsModel = require("./questionsModel");

beforeEach(async () => {
  await db("users").truncate();
});

describe("testing questions endpoint", () => {
  test("testing questions post", async () => {
    const response = await request(server)
      .post("/api/auth/register")
      .send({ username: "peter", password: "1234" });
    expect(response.status).toBe(201);
    const response2 = await request(server)
      .post("/api/auth/login")
      .send({ username: "peter", password: "1234" });
    expect(response2.status).toBe(200);
    const token = response2.body.token;
    console.log(token);
    const response3 = await request(server)
      .get("/api/restricted/questions")
      .set("authorization", token);
    expect(response3.body.length).toEqual(1);
    expect(response3.status).toBe(200);
  });
});
