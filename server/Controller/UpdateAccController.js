const mongoose = require("mongoose");
var express = require("express");

const Account = require("../model/Useracc");
const Info = require("../model/Userinfo");

module.exports = {
  async updateName(req, res) {
    const cname = req.body.cname;
    const nname = req.body.nname;
    const id = req.body.id;
    Info.updateOne({ uID: id, uname: cname }, { $set: { uname: nname } })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  async updatePassword(req, res) {
    const _id = req.body.id;
    const cpass = req.body.cpass;
    const npass = req.body.npass;
    Account.updateOne(
      { _id: _id, password: cpass },
      { $set: { password: npass } }
    )
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  async updateEmail(req, res) {
    const cemail = req.body.cemail;
    const nemail = req.body.nemail;
    const id = req.body.id;

    console.log(cemail);
    console.log(nemail);
    console.log(id);
    Info.updateOne({ uID: id, uemail: cemail }, { $set: { uemail: nemail } })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
