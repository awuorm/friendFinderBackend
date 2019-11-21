const server = require("../../server");
const request = require("supertest");
const messagesModel = require("./messagesModel");
const db = require("../dbConfig");

beforeEach(async () => {
    await db("chat").truncate();
    await db("users").truncate();
    
  });

describe("testing messages endpoint",() => {
        test("testing message post", async () => {
            const response = await request(server)
          .post("/api/auth/register")
          .send({ username: "mildred", password: "1234" });
        expect(response.status).toBe(201);
        const response5 = await request(server)
        .post("/api/auth/register")
        .send({ username: "effie", password: "1234" });
      expect(response5.status).toBe(201);
        const response2 = await request(server)
          .post("/api/auth/login")
          .send({ username: "effie", password: "1234" });
          expect(response2.status).toBe(200);
          const token = response2.body.token;
          console.log(token);
          const response3 = await request(server).get("/api/restricted/msgs").set("authorization",token);
          expect(response3.body.length).toEqual(0);
          const response4 = await request(server).post("/api/restricted/msgs").set("authorization",token)
          .send({sender:1,recepient:2,message:"Hello"});
        //   console.log(response4);
        expect(response4.status).toBe(201);
        })
    
})