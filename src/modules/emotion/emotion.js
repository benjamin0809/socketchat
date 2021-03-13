class Emotion {

  getEmotions() {
    const EMOJIS = "😀😃😄😁😆😅😂🤣😊😇🙂🙃😉😌😍😘😗😙😚😋😜😝😛🤑🤗🤓😎🤡🤠😏😒😞😔😟😕🙁" + "☹️😣😖😫😩😤😠😡😶😐😑😯😦😧😮😲😵😳😱😨😰😢😥🤤😭😓😪😴🙄🤔🤥😬🤐🤢🤧😷🤒🤕😈👿" + "👹👺💩👻💀☠️👽👾🤖🎃😺😸😹😻😼😽🙀😿😾👐🙌👏🙏🤝👍👎👊✊🤛🤜🤞✌️🤘👌👈👉👆👇☝️✋🤚" + "🖐🖖👋🤙💪🖕✍️🤳💅🖖💄💋👄👅👂👃👣👁👀🗣👤👥👶👦👧👨👩👱‍♀️👱👴👵👲👳‍♀️👳👮‍♀️👮👷‍♀️👷";

    let array = []
    for (let item of EMOJIS.split('')) {
      let obj = {
        bit16: item.codePointAt(0).toString(16),
        bit10: item.codePointAt(0).toString(10),
        bit32: item.codePointAt(0).toString(32)
      }
      array.push(obj)
    }
    return array
  }
}

module.exports = Emotion 