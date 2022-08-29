import { MessagePipe, defaultTransformers } from "https://cdn.skypack.dev/messagepipe@0.2.2";
import MessageFormat from "https://cdn.skypack.dev/@messageformat/core@3.0.1";
import MessageFormatOld from "https://cdn.skypack.dev/messageformat@2.3.0";
import formatMessage from "https://cdn.skypack.dev/format-message@6.2.4";
import MessageFormat6 from "https://cdn.skypack.dev/message-format@6.2.4";
import { MessageFormatter as UltraqIcuMessageFormatter } from "https://cdn.skypack.dev/@ultraq/icu-message-formatter@0.12.0";
import { MessageFormatter as PhensleyMessageFormatter } from "https://cdn.skypack.dev/@phensley/messageformat@1.5.1";

const message1 = '{gender | select, male:"He", female:"She", other:"They"} liked this.';
const message = '{gender, select, male{He} female{She} other{They}} liked this.';
const props = {
  gender: "female",
};