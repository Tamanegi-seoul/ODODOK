import { Block, BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { useEffect, useState } from "react";
import {
  BlockNoteView,
  useBlockNote,
  getDefaultReactSlashMenuItems,
  ReactSlashMenuItem,
} from "@blocknote/react";
import "@blocknote/core/style.css";
import { HiOutlineGlobeAlt } from "react-icons/hi";

// Command to insert "Hello World" in bold in a new block below.
const insertHelloWorld = (editor: BlockNoteEditor) => {
  // Block that the text cursor is currently in.
  const currentBlock: Block = editor.getTextCursorPosition().block;

  // New block we want to insert.
  const helloWorldBlock: PartialBlock = {
    type: "paragraph",
    content: [
      {
        type: "text",
        text: "Hello World",
        styles: {
          bold: true,
        },
      },
    ],
  };

  // Inserting the new block after the current one.
  editor.insertBlocks([helloWorldBlock], currentBlock, "before");
};

// Custom Slash Menu item which executes the above function.
const insertHelloWorldItem: ReactSlashMenuItem = {
  name: "Insert Hello World",
  execute: insertHelloWorld,
  aliases: ["helloworld", "hw"],
  group: "Other",
  icon: <HiOutlineGlobeAlt size={18} />,
  hint: "Used to insert a block with 'Hello World' below.",
};

// List containing all default Slash Menu Items, as well as our custom one.
const customSlashMenuItemList = [
  ...getDefaultReactSlashMenuItems(),
  insertHelloWorldItem,
];

export default function Editor() {
  const [markdown, setMarkdown] = useState<string>("");
  const [html, setHTML] = useState<string>("");
  const [blocks, setBlocks] = useState<Block[] | null>(null);

  const editor: BlockNoteEditor = useBlockNote({
    slashMenuItems: customSlashMenuItemList,
   
    // Listens for when the editor's contents change.
    onEditorContentChange: (editor: any) => {
      // console.log(editor.getJSON());

      setBlocks(editor.topLevelBlocks);

      // MarkDown
      const saveBlocksAsMarkdown = async () => {
        const markdown: string =
          await editor.blocksToMarkdownLossy(editor.topLevelBlocks);
        setMarkdown(markdown);
      };
      saveBlocksAsMarkdown();

      // HTML
      const saveBlocksAsHTML = async () => {
        const html: string = await editor.blocksToHTMLLossy(editor.topLevelBlocks);
        setHTML(html);
      };
      saveBlocksAsHTML();

    }
  });

  // useEffect를 사용하여 blocks 상태가 변경될 때마다 실행되도록 설정
  useEffect(() => {
    // blocks가 변경될 때의 추가 작업을 수행
    console.log("Blocks updated:", blocks);
  }, [blocks]); // blocks 상태가 변경될 때마다 useEffect가 실행되도록 함
  

  return (
    <div>
      <div className="blockNoteWrapper">
        <BlockNoteView editor={editor} theme={"light"}></BlockNoteView>
        {/* <p>{markdown}</p> */}
        {/* <p>{html}</p> */}
        <pre>{JSON.stringify(blocks, null, 2)}</pre>
      </div>
    </div>
  );
}
