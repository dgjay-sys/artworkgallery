const mongoose = require("mongoose");
var express = require("express");

//models
const Account = require("../model/Useracc");
const Info = require("../model/Userinfo");

module.exports = {
  async createAccount(req, res) {
    const account = req.body;
    const newAccount = new Account(account);
    await newAccount.save();
    res.json(newAccount);
  },
  async createInformation(req, res) {
    const information = req.body;
    const newInformation = new Info(information);
    await newInformation.save();
    res.json(newInformation);
  },
  async fetchAccount(req, res) {
    const user = req.body.user;
    const password = req.body.password;
    Account.findOne({ $and: [{ user: user }, { password: password }] })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  async fetchInfo(req, res) {
    const uID = req.body.uID;
    Info.findOne({ uID: uID })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
