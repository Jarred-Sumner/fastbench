import { compileSchema, parseSchema } from "https://cdn.skypack.dev/kiwi-schema@0.5.0";
import * as r from "https://cdn.skypack.dev/restructure@3.0.2";

const kiwiSchema = compileSchema(parseSchema(`
enum Action {
  top = 0;
  left = 1;
  right = 2;
  bottom = 3;
}

struct Actions {
  float x;
  float y;
  float dy;
  Action[] actions;
  bool isGrounded;
  bool isDead;
}

message Example {
  Actions actions = 1;
}
`))

const data = {
  actions: {
    "$$exome_id": "Player-L7PTO5CAS94D6",
    "startX": 50,
    "startY": 50,
    "x": 70.99915999999992,
    "y": 141.87485000299995,
    "dy": 1.4999399999999743,
    "dx": 0,
    "actions": ["top", "left"],
    "isGrounded": false,
    "isDead": false,
    "score": 0,
  },
};

const Action = new r.Enum(r.uint8, ['top', 'left', 'right', 'bottom']);

const Actions = new r.Struct({
  x: r.float,
  y: r.float,
  dy: r.float,
  actions: new r.Array(Action, r.uint8),
  isGrounded: new r.Boolean(r.uint32),
  isDead: new r.Boolean(r.uint32),
});

const Example = new r.Struct({
  actions: Actions,
});