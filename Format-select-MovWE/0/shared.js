import MessageFormat from "https://cdn.skypack.dev/@messageformat/core@3.0.1";
import { MessagePipe, defaultTransformers } from "https://cdn.skypack.dev/messagepipe@0.2.1";

const transformers = defaultTransformers();
const message1 = '{gender | select, male:"He", female:"She", other:"They"} liked this.';
const message2 = '{gender, select, male{He} female{She} other{They}} liked this.';
const props = {
  gender: "female",
};