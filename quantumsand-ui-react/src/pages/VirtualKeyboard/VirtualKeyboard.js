import React, { useRef, useState, useEffect } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import EmojiPicker from "emoji-picker-react";
import Graphemer from "grapheme-splitter";

import "./VirtualKeyboard.css";

export default function VirtualKeyboard({ pushEvent, locales, layout, handleEvent, sendEvent, wallpaper }){

  
  // const keyboard = useRef();

  const [isEmojiOpen, setEmojiOpen] = useState(false);
  const ref = useRef();
  const textArea = useRef();
  const splitter = new Graphemer();

  const arabic = {
    layout: {
      default: [
        "\u0630 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
        "{tab} \u0636 \u0635 \u062B \u0642 \u0641 \u063A \u0639 \u0647 \u062E \u062D \u062C \u062F \\",
        "{lock} \u0634 \u0633 \u064A \u0628 \u0644 \u0627 \u062A \u0646 \u0645 \u0643 \u0637 {enter}",
        "{shift} \u0626 \u0621 \u0624 \u0631 \u0644\u0627 \u0649 \u0629 \u0648 \u0632 \u0638 {shift}",
        ".com @ {space}",
      ],
      shift: [
        "\u0651 ! @ # $ % ^ & * ) ( _ + {bksp}",
        "{tab} \u064E \u064B \u064F \u064C \u0644\u0625 \u0625 \u2018 \u00F7 \u00D7 \u061B < > |",
        '{lock} \u0650 \u064D ] [ \u0644\u0623 \u0623 \u0640 \u060C / : " {enter}',
        "{shift} ~ \u0652 } { \u0644\u0622 \u0622 \u2019 , . \u061F {shift}",
        ".com @ {space}",
      ],
    }
  }

  const english = {
    layout: {
      default: [
        "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
        "{tab} q w e r t y u i o p [ ] \\",
        "{lock} a s d f g h j k l ; ' {enter}",
        "{shift} z x c v b n m , . / {shift}",
        ".com @ {emoji} {space} {close} {go}"
      ],
      shift: [
        "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
        "{tab} Q W E R T Y U I O P { } |",
        '{lock} A S D F G H J K L : " {enter}',
        "{shift} Z X C V B N M < > ? {shift}",
        ".com @ {emoji} {space} {close} {go}"
      ]
    }
  }

  /**
   * Layout: Urdu
   * Source: Salman Sattar (https://github.com/salman65)
   */
  const urdu = {
    layout: {
      default: [
        "` \u0661 \u0662 \u0663 \u0664 \u0665 \u0666 \u0667 \u0668 \u0669 \u0660 - = {bksp}",
        "{tab} \u0642 \u0648 \u0639 \u0631 \u062A \u06D2 \u0621 \u0649 \u06C1 \u067E [ ]",
        "{lock} \u0627 \u0633 \u062F \u0641 \u06AF \u06BE \u062C \u06A9 \u0644 \u061B \u060C {enter}",
        "{shift} \u0632 \u0634 \u0686 \u0637 \u0628 \u0646 \u0645 \u06E4 , . / {shift}",
        ".com @ {space}",
      ],
      shift: [
        "~ ! @ # $ \u066A ^ & * ( ) _ + {bksp}",
        "{tab} \uFE70 \uFE77 \uFE79 \u0691 \u0679 \uFE7A \uFEFB \uFE8B \u0629 | { }",
        "{lock} \u0622 \u0635 \u0688 \u060D \u063A \u062D \u0636 \u062E \u06D4 \u0703 \u05f4 {enter}",
        "{shift} \u0630 \u0698 \u062B \u0638 \u06BA \u066b \u0640 < > \u061F {shift}",
        ".com @ {space}",
      ],
    }
  }

  const persian = {
    layout: {
      default: [
        "` \u06f1 \u06f2 \u06f3 \u06f4 \u06f5 \u06f6 \u06f7 \u06f8 \u06f9 \u06f0 - = {bksp}",
        "{tab} \u0636 \u0635 \u062b \u0642 \u0641 \u063a \u0639 \u0647 \u062e \u062d \u062c \u0686 \\",
        "{lock} \u0634 \u0633 \u06cc \u0628 \u0644 \u0627 \u062a \u0646 \u0645 \u06a9 \u06af {enter}",
        "{shift} \u0638 \u0637 \u0632 \u0631 \u0630 \u062f \u067e \u0648 \u002e \u002f {shift}",
        ".com @ {space}",
        ],
      shift: [
        "\u00f7 \u0021 \u066c \u066b \ufdfc \u066a \u00d7 \u06f7 \u002a \u0029 \u0028 \u0640 \u002b {bksp}",
        "{tab} \u0652 \u064c \u064d \u064b \u064f \u0650 \u064e \u0651 \u005d \u005b \u007d \u007b",
        "{lock} \u0624 \u0626 \u064a \u0625 \u0623 \u0622 \u0629 \u00bb \u00ab \u003a \u061b {enter}",
        "{shift} \u0643 \u0653 \u0698 \u0670 \u200c \u0654 \u0621 \u003c \u003e \u061f {shift}",
        ".com @ {space}",
      ],
    }
  }

  const turkish = {
    layout: {
      default: [
        '" 1 2 3 4 5 6 7 8 9 0 * - # {bksp}',
        "{tab} q w e r t y u ı o p ğ ü [ ]",
        "{lock} a s d f g h j k l ş i , {enter}",
        "{shift} < z x c v b n m ö ç . | $ € {shift}",
        ".com @ {space}",
      ],
      shift: [
        "é ! ' ^ + % & / ( ) = ? _ ~ {bksp}",
        "{tab} Q W E R T Y U I O P Ğ Ü { }",
        "{lock} A S D F G H J K L Ş İ ; {enter}",
        "{shift} > Z X C V B N M Ö Ç : \\ ` ´ {shift}",
        ".com @ {space}",
      ],
    }
  }

  const hindi = {
    layout: {
      default: [
        "` \u090D \u0945 \u094D\u0930 \u0930\u094D \u091C\u094D\u091E \u0924\u094D\u0930 \u0915\u094D\u0937 \u0936\u094D\u0930 \u096F \u0966 - \u0943 {bksp}",
        "{tab} \u094C \u0948 \u093E \u0940 \u0942 \u092C \u0939 \u0917 \u0926 \u091C \u0921 \u093C \u0949 \\",
        "{lock} \u094B \u0947 \u094D \u093F \u0941 \u092A \u0930 \u0915 \u0924 \u091A \u091F {enter}",
        "{shift} \u0902 \u092E \u0928 \u0935 \u0932 \u0938 , . \u092F {shift}",
        ".com @ {space}",
      ],
      shift: [
        "~ \u0967 \u0968 \u0969 \u096A \u096B \u096C \u096D \u096E \u096F \u0966 \u0903 \u090B {bksp}",
        "{tab} \u0914 \u0910 \u0906 \u0908 \u090A \u092D \u0919 \u0918 \u0927 \u091D \u0922 \u091E \u0911",
        "{lock} \u0913 \u090F \u0905 \u0907 \u0909 \u092B \u0931 \u0916 \u0925 \u091B \u0920 {enter}",
        '{shift} "" \u0901 \u0923 \u0928 \u0935 \u0933 \u0936 \u0937 \u0964 \u095F {shift}',
        ".com @ {space}",
      ],
    },
  }

  const keyboard = useRef();
  const [input, setInput] = useState("");
  // const [updatedInput, setUpdatedInput] = useState("");
  const [currentLayout, setCurrentLayout] = useState(english.layout);
  const [currentLayoutName, setCurrentLayoutName] = useState("default");

  const onChange = inputChanged => {
    console.log(`onChange ${inputChanged}`);
    setInput(inputChanged);
    if (inputChanged.length < input.length) {
      handleDelete();
    }
    console.log("Input changed", input);
    // keyboardInstance.setInput(input);
  };

  const getEmojiUrl = emoji => {
    // console.log(`/images/emoji/svg/${emoji}.svg`);
    // return `/images/emoji/openmoji-svg-color/${emoji}.svg`;
    return `/emoji/twemoji/${emoji}.svg`;
  }

  const handleShift = () => {
    const newLayoutName = currentLayoutName === "default" ? "shift" : "default";
    setCurrentLayoutName(newLayoutName);
    console.log(currentLayoutName);
    // keyboard.current.setCurrentLayout(newLayoutName);
  };

  const handleEmoji = () => {
    // toggleEmoji mode
    setEmojiOpen(!isEmojiOpen);
    console.log("Emoji mode");
  };

  const handleDelete = () => {
    // var skintone_emoji = /\p{Emoji_Modifier_Base}/u.test(input);
    // if(skintone_emoji) {
    //   console.log("skintone emoji delete");
    // }

    var split_graphemes = splitter.splitGraphemes(input);
    console.log(`split_graphemes ${split_graphemes}`);

    var slice_last_grapheme = split_graphemes.slice(0, -1);
    console.log(`slice_last_grapheme ${slice_last_grapheme}`);

    setInput(slice_last_grapheme.join(''));
  }

  const onKeyPress = button => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") handleShift();

    if (button === "{emoji}") { handleEmoji(); }

    if (button === "{bksp}") { console.log("Delete!!"); handleDelete(); }

    keyboard.current.replaceInput({default: input});
    textArea.current.scrollTop = textArea.current.scrollHeight;
  };

  const onChangeInput = event => {
    // event.preventDefault();
    console.log(event.target.value);
    const input = event.target.value;
    setInput(input);
    // keyboardInstance.setInput(input);
  };

  // const keyboard = new Keyboard({
  //   onChange: input => onChange(input),
  //   onKeyPress: button => onKeyPress(button),
  //   newLineOnEnter: true,
  //   layoutName: currentLayoutName,
  //   layout: currentLayout,
  //   theme: "hg-theme-default hg-layout-default myTheme",
  //   display: {
  //     '{emoji}': '🙂',
  //     '{tab}': 'tab',
  //     '{shift}': 'shift',
  //     '{bksp}': 'backspace',
  //     '{enter}': '< enter',
  //     '{shift}': 'shift',
  //     '{lock}': 'caps',
  //     '{space}': 'space'
  //   },
  //   buttonTheme: [
  //         {
  //           class: "hg-red",
  //           buttons: "Q W E R T Y q w e r t y"
  //         },
  //         {
  //           class: "hg-highlight",
  //           buttons: "Q q"
  //         },
  //         {
  //           class: "hg-emoji",
  //           buttons: "{emoji}"
  //         }
  //   ]});

    const emojiClick = emojiCode => {
      console.log(`Emoji click:`);
      console.log(emojiCode);
      setInput(`${input}${emojiCode.emoji}`);
      keyboard.current.replaceInput({default: input});
      textArea.current.scrollTop = textArea.current.scrollHeight;
      // keyboardInstance.setInput(input);
    }

  return (
    <div className="virtualkeyboard" style={{ backgroundImage: `url(${wallpaper})`}}>
      <textarea
        value={input}
        ref={textArea}
        placeholder={"Tap on the virtual keyboard to start"}
        onChange={onChangeInput} />
      {/* <div className="react-simple-keyboard" /> */}
      <Keyboard
          keyboardRef={r => (keyboard.current = r)}
          onChange={input => onChange(input)}
          onKeyPress={button => onKeyPress(button)}
          newLineOnEnter={true}
          layoutName={currentLayoutName}
          layout={currentLayout}
          theme={"hg-theme-default hg-layout-default myTheme"}
          display={{
            '{emoji}': '🙂',
            '{tab}': 'tab',
            '{shift}': 'shift',
            '{bksp}': 'backspace',
            '{enter}': '< enter',
            '{lock}': 'caps',
            '{space}': 'space',
            '{close}': 'close',
            '{go}': 'go'
          }}
          buttonTheme={[
                {
                  class: "hg-red",
                  buttons: "Q W E R T Y q w e r t y"
                },
                {
                  class: "hg-highlight",
                  buttons: "Q q"
                },
                {
                  class: "hg-emoji",
                  buttons: "{emoji}"
                },
                {
                  class: "hg-go",
                  buttons: "{go}"
                },
                {
                  class: "hg-close",
                  buttons: "{close}"
                }
          ]}
        />
      {/* Opens to 400 since initial index is 1 */}

      <EmojiPicker height="calc(100vh - 315px)" width="100%"
                  //  previewConfig={{}}
                   getEmojiUrl={emoji => getEmojiUrl(emoji)}
                   onEmojiClick={emojiCode => emojiClick(emojiCode)} />

    </div>
  );
}
