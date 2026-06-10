// "use client"

// import { useEffect, useRef, useState } from "react"
// import {
//   EditorContent,
//   EditorContext,
//   useCurrentEditor,
//   useEditor,
// } from "@tiptap/react"

// // --- Tiptap Core Extensions ---
// import { StarterKit } from "@tiptap/starter-kit"
// import { Image } from "@tiptap/extension-image"
// import { TaskItem, TaskList } from "@tiptap/extension-list"
// import { TextAlign } from "@tiptap/extension-text-align"
// import { Typography } from "@tiptap/extension-typography"
// import { Highlight } from "@tiptap/extension-highlight"
// import { Subscript } from "@tiptap/extension-subscript"
// import { Superscript } from "@tiptap/extension-superscript"
// import { Selection } from "@tiptap/extensions"
// import { Placeholder } from '@tiptap/extensions'
// // --- UI Primitives ---
// import { Button } from "@/components/tiptap Startkit/tiptap-ui-primitive/button"
// import { Spacer } from "@/components/tiptap-ui-primitive/spacer"

// import {
//   Toolbar,
//   ToolbarGroup,
//   ToolbarSeparator,
// } from "@/components/tiptap Startkit/tiptap-ui-primitive/toolbar"

// // --- Tiptap Node ---
// import { ImageUploadNode } from "@/components/tiptap Startkit/tiptap-node/image-upload-node/image-upload-node-extension"
// import { HorizontalRule } from "@/components/tiptap Startkit/tiptap-node/horizontal-rule-node/horizontal-rule-node-extension"
// import "@/components/tiptap-node/blockquote-node/blockquote-node.scss"
// import "@/components/tiptap-node/code-block-node/code-block-node.scss"
// import "@/components/tiptap-node/horizontal-rule-node/horizontal-rule-node.scss"
// import "@/components/tiptap-node/list-node/list-node.scss"
// import "@/components/tiptap-node/image-node/image-node.scss"
// import "@/components/tiptap-node/heading-node/heading-node.scss"
// import "@/components/tiptap-node/paragraph-node/paragraph-node.scss"

// // --- Tiptap UI ---
// import { HeadingDropdownMenu } from "@/components/tiptap Startkit/tiptap-ui/heading-dropdown-menu"
// import { ImageUploadButton } from "@/components/tiptap Startkit/tiptap-ui/image-upload-button"
// import { ListDropdownMenu } from "@/components/tiptap Startkit/tiptap-ui/list-dropdown-menu"
// import { BlockquoteButton } from "@/components/tiptap Startkit/tiptap-ui/blockquote-button"
// import {
//   ColorHighlightPopover,
//   ColorHighlightPopoverContent,
//   ColorHighlightPopoverButton,
// } from "@/components/tiptap Startkit/tiptap-ui/color-highlight-popover"
// import {
//   LinkPopover,
//   LinkContent,
//   LinkButton,
// } from "@/components/tiptap Startkit/tiptap-ui/link-popover"
// import { MarkButton } from "@/components/tiptap Startkit/tiptap-ui/mark-button"
// import { TextAlignButton } from "@/components/tiptap Startkit/tiptap-ui/text-align-button"
// import { UndoRedoButton } from "@/components/tiptap Startkit/tiptap-ui/undo-redo-button"
// import { TableKit } from "@tiptap/extension-table"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// // --- Icons ---
// import { ArrowLeftIcon } from "@/components/tiptap Startkit/tiptap-icons/arrow-left-icon"
// import { HighlighterIcon } from "@/components/tiptap Startkit/tiptap-icons/highlighter-icon"
// import { LinkIcon } from "@/components/tiptap Startkit/tiptap-icons/link-icon"
// import { TableIcon } from "lucide-react"

// // --- Hooks ---
// import { useIsBreakpoint } from "@/hooks/use-is-breakpoint"
// import { useWindowSize } from "@/hooks/use-window-size"
// import { useCursorVisibility } from "@/hooks/use-cursor-visibility"

// // --- Components ---
// import { ThemeToggle } from "@/components/tiptap Startkit/tiptap-templates/simple/theme-toggle"

// // --- Lib ---
// import { handleImageUpload, MAX_FILE_SIZE } from "@/lib/tiptap-utils"

// // --- Styles ---
// import "@/components/tiptap-templates/simple/simple-editor.scss"

// // import content from "@/components/tiptap-templates/simple/data/content.json"

// const InsertTableButton = () => {
//   const { editor } = useCurrentEditor()
//   if (!editor) return null
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button
//           type="button"
//           variant="ghost"
//           tooltip="Tabel"    >
//           <TableIcon className="tiptap-button-icon" />
//         </Button>
//       </DropdownMenuTrigger>

//       <DropdownMenuContent>
//         <DropdownMenuItem
//           onClick={() =>
//             editor.chain().focus().insertTable({
//               rows: 3,
//               cols: 3,
//               withHeaderRow: true,
//             }).run()
//           }
//         >
//           Tabel toevoegen
//         </DropdownMenuItem>

//         <DropdownMenuItem
//           onClick={() => editor.chain().focus().addColumnBefore().run()}
//         >
//           Kolom links toevoegen
//         </DropdownMenuItem>

//         <DropdownMenuItem
//           onClick={() => editor.chain().focus().addColumnAfter().run()}
//         >
//           Kolom rechts toevoegen
//         </DropdownMenuItem>

//         <DropdownMenuItem
//           onClick={() => editor.chain().focus().addRowBefore().run()}
//         >
//           Rij boven toevoegen
//         </DropdownMenuItem>

//         <DropdownMenuItem
//           onClick={() => editor.chain().focus().addRowAfter().run()}
//         >
//           Rij onder toevoegen
//         </DropdownMenuItem>

//         <DropdownMenuItem
//           onClick={() => editor.chain().focus().deleteColumn().run()}
//         >
//           Kolom verwijderen
//         </DropdownMenuItem>

//         <DropdownMenuItem
//           onClick={() => editor.chain().focus().deleteRow().run()}
//         >
//           Rij verwijderen
//         </DropdownMenuItem>

//         <DropdownMenuItem
//           onClick={() => editor.chain().focus().deleteTable().run()}
//           className="text-red-500"
//         >
//           Tabel verwijderen
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }

// const MainToolbarContent = ({
//   onHighlighterClick,
//   onLinkClick,
//   isMobile,
// }: {
//   onHighlighterClick: () => void
//   onLinkClick: () => void
//   isMobile: boolean
// }) => {
//   return (
//     <>
//       {/* <Spacer /> */}

//       <ToolbarGroup>
//         <UndoRedoButton action="undo" />
//         <UndoRedoButton action="redo" />
//       </ToolbarGroup>

//       <ToolbarSeparator />

//       <ToolbarGroup>
//         <HeadingDropdownMenu modal={false} levels={[1, 2, 3, 4]} />
//         <ListDropdownMenu
//           modal={false}
//           types={["bulletList", "orderedList", "taskList"]}
//         />
//         <BlockquoteButton />
//         {/* <CodeBlockButton /> */}
//       </ToolbarGroup>

//       <ToolbarSeparator />

//       <ToolbarGroup>
//         <MarkButton type="bold" />
//         <MarkButton type="italic" />
//         <MarkButton type="strike" />
//         {/* <MarkButton type="code" /> */}
//         <MarkButton type="underline" />
//         {!isMobile ? (
//           <ColorHighlightPopover />
//         ) : (
//           <ColorHighlightPopoverButton onClick={onHighlighterClick} />
//         )}
//         {!isMobile ? <LinkPopover /> : <LinkButton onClick={onLinkClick} />}
//       </ToolbarGroup>

//       <ToolbarSeparator />

//       <ToolbarGroup>
//         {/* <MarkButton type="superscript" />
//         <MarkButton type="subscript" /> */}
//       </ToolbarGroup>

//       <ToolbarSeparator />

//       <ToolbarGroup>
//         <TextAlignButton align="left" />
//         <TextAlignButton align="center" />
//         <TextAlignButton align="right" />
//         <TextAlignButton align="justify" />
//       </ToolbarGroup>

//       <ToolbarSeparator />

//       <ToolbarGroup>
//         <ImageUploadButton text="" />
//         <InsertTableButton />
//       </ToolbarGroup>

//       <Spacer />

//       {/* {isMobile && <ToolbarSeparator />} */}

//       {/* Darkmode */}
//       {/* <ToolbarGroup>
//         <ThemeToggle />
//       </ToolbarGroup> */}
//     </>
//   )
// }

// const MobileToolbarContent = ({
//   type,
//   onBack,
// }: {
//   type: "highlighter" | "link"
//   onBack: () => void
// }) => (
//   <>
//     <ToolbarGroup>
//       <Button variant="ghost" onClick={onBack}>
//         <ArrowLeftIcon className="tiptap-button-icon" />
//         {type === "highlighter" ? (
//           <HighlighterIcon className="tiptap-button-icon" />
//         ) : (
//           <LinkIcon className="tiptap-button-icon" />
//         )}
//       </Button>
//     </ToolbarGroup>

//     <ToolbarSeparator />

//     {type === "highlighter" ? (
//       <ColorHighlightPopoverContent />
//     ) : (
//       <LinkContent />
//     )}
//   </>
// )

// export function SimpleEditor() {
//   const isMobile = useIsBreakpoint()
//   const { height } = useWindowSize()
//   const [mobileView, setMobileView] = useState<"main" | "highlighter" | "link">(
//     "main"
//   )
//   const toolbarRef = useRef<HTMLDivElement>(null)

//   const editor = useEditor({
//     immediatelyRender: false,
//     editorProps: {
//       attributes: {
//         autocomplete: "off",
//         autocorrect: "off",
//         autocapitalize: "off",
//         "aria-label": "Main content area, start typing to enter text.",
//         class:
//           "simple-editor"
//       },
//     },
//     extensions: [
//       StarterKit.configure({
//         horizontalRule: false,
//         link: {
//           openOnClick: false,
//           enableClickSelection: true,
//         },
//       }),
//       TableKit.configure({
//         table: { resizable: true },
//       }),
//       HorizontalRule,
//       TextAlign.configure({ types: ["heading", "paragraph"] }),
//       TaskList,
//       TaskItem.configure({ nested: true }),
//       Highlight.configure({ multicolor: true }),
//       Image,
//       Typography,
//       Superscript,
//       Subscript,
//       Selection,
//       ImageUploadNode.configure({
//         accept: "image/*",
//         maxSize: MAX_FILE_SIZE,
//         limit: 3,
//         upload: async (file) => {
//           return URL.createObjectURL(file)
//         },
//         onError: (error) => console.error("Upload failed:", error),
//       }),
//       Placeholder.configure({
//         placeholder: "Schrijf hier je blog...",
//       }),
//     ]
//   })

//   const rect = useCursorVisibility({
//     editor,
//     overlayHeight: toolbarRef.current?.getBoundingClientRect().height ?? 0,
//   })

//   useEffect(() => {
//     if (!isMobile && mobileView !== "main") {
//       setMobileView("main")
//     }
//   }, [isMobile, mobileView])

//   return (
//     <div className="rounded-lg border border-input bg-background overflow-hidden">
//       <EditorContext.Provider value={{ editor }}>
//         <Toolbar
//           ref={toolbarRef}
//           style={{
//             ...(isMobile
//               ? {
//                 bottom: `calc(100% - ${height - rect.y}px)`,
//               }
//               : {}),
//           }}
//         >
//           {mobileView === "main" ? (
//             <MainToolbarContent
//               onHighlighterClick={() => setMobileView("highlighter")}
//               onLinkClick={() => setMobileView("link")}
//               isMobile={isMobile}
//             />
//           ) : (
//             <MobileToolbarContent
//               type={mobileView === "highlighter" ? "highlighter" : "link"}
//               onBack={() => setMobileView("main")}
//             />
//           )}
//         </Toolbar>

//         <EditorContent
//           editor={editor}
//           role="presentation"
//           className="simple-editor-content"
//         />
//       </EditorContext.Provider>
//     </div>
//   )
// }
