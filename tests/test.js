import tap from "tap";
import { l } from "../src/language";

tap.test("`if` condition appropriately", async () => {
  tap.test("runs my fn", async t => {
    l.if(true, t.pass);
  });

  tap.test("doesn't runs my fn", async t => {
    l.if(false, t.fail);
    t.pass();
  });
});

tap.test("`then` runs when", async () => {
  tap.test("the if returns true", async t => {
    l.if(true, t.pass).then(t.pass);
  });

  tap.test("the if returns false", async t => {
    l.if(false, t.fail).then(t.pass.bind(t, "then fired"));
  });

  tap.test("`then` can be chained", t => {
    l.then(t.pass)
      .then(t.pass)
      .then(t.end);
  });
});

tap.test("`then` can be chained", async () => {
  tap.test("the if returns true", async t => {
    l.if(true).then(t.pass);
  });

  tap.test("the if returns false", async t => {
    l.if(false).then(t.pass.bind(t, "then fired"));
  });
});
