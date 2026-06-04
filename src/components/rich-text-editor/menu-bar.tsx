"use client"

import type { Editor } from "@tiptap/react"
import { Toggle } from "@/components/ui/toggle"
import {
  Bold,
  Italic,
  Underline,
  Undo2,
  Redo2,
  Heading1,
  Heading2,
  Heading3,
  Link,
  Image,
  Quote,
  AlignLeft,
  AlignRight,
  AlignJustify,
  Pilcrow,
  Strikethrough,
  Highlighter,
  AlignCenter,
  Table,
  TableIcon,
} from "lucide-react"

  
export default function MenuBar({editor}: { editor: Editor | null }) {
  if (!editor) {
    return null;
  }

const options = [
    {
      icon: <Heading1 className="size-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      pressed: editor.isActive("heading", { level: 1 }),
      label: "H1",
    },
    {
      icon: <Heading2 className="size-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      pressed: editor.isActive("heading", { level: 2 }),
      label: "H2",
    },
    {
      icon: <Heading3 className="size-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      pressed: editor.isActive("heading", { level: 3 }),
      label: "H3",
    },
    {
      icon: <Pilcrow className="size-4" />,
      onClick: () => editor.chain().focus().setParagraph().run(),
      pressed: editor.isActive("paragraph"),
      label: "Paragraaf",
    },
    {
      icon: <Bold className="size-4" />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      pressed: editor.isActive("bold"),
      label: "Vet",
    },
    {
      icon: <Italic className="size-4" />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      pressed: editor.isActive("italic"),
      label: "Cursief",
    },
    {
      icon: <Strikethrough className="size-4" />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      pressed: editor.isActive("strike"),
      label: "Doorstrepen",
    },
    {
      icon: <Underline className="size-4" />,
      onClick: () => editor.chain().focus().toggleUnderline().run(),
      pressed: editor.isActive("underline"),
      label: "Underline",
    },
    {
      icon: <Highlighter className="size-4" />,
      onClick: () => editor.chain().focus().toggleHighlight().run(),
      pressed: editor.isActive("highlight"),
      label: "Highlight",
    },
    {
      icon: <AlignLeft className="size-4" />,
      onClick: () => editor.chain().focus().setTextAlign("left").run(),
      pressed: editor.isActive({ textAlign: "left" }),
      label: "Links uitlijnen",
    },
    {
      icon: <AlignCenter className="size-4" />,
      onClick: () => editor.chain().focus().setTextAlign("center").run(),
      pressed: editor.isActive({ textAlign: "center" }),
      label: "Centreren",
    },
    {
      icon: <AlignRight className="size-4" />,
      onClick: () => editor.chain().focus().setTextAlign("right").run(),
      pressed: editor.isActive({ textAlign: "right" }),
      label: "Rechts uitlijnen",
    },
    {
      icon: <AlignJustify className="size-4" />,
      onClick: () => editor.chain().focus().setTextAlign("justify").run(),
      pressed: editor.isActive({ textAlign: "justify" }),
      label: "Uitvullen",
    },
    {
      icon: <Undo2 className="size-4" />,
      onClick: () => editor.chain().focus().undo().run(),
      pressed: false,
      label: "Ongedaan maken",
    },
    {
      icon: <Redo2 className="size-4" />,
      onClick: () => editor.chain().focus().redo().run(),
      pressed: false,
      label: "Opnieuw uitvoeren",
    },
    {
      icon: <Link className="size-4" />,
      onClick: () => editor.chain().focus().toggleLink().run(),
      pressed: editor.isActive("link"),
      label: "Link",
    },
    {
      icon: <Image className="size-4" />,
      onClick: () => editor.chain().focus().toggleImage().run(),
      pressed: editor.isActive("image"),
      label: "Afbeelding",
    },
    {
      icon: <Quote className="size-4" />,
      onClick: () => editor.chain().focus().toggleQuote().run(),
      pressed: editor.isActive("quote"),
      label: "Citaat",
    }, 
{
  icon: <TableIcon className="size-4" />,
  onClick: () =>
    editor.chain().focus().insertTable({
      rows: 3,
      cols: 3,
      withHeaderRow: true,
    }).run(),
  pressed: editor.isActive("table"),
  label: "Tabel",
}
    // {
    //   icon: <Youtube className="size-4" />,
    //   onClick: () => editor.chain().focus().toggleStrike().run(),
    //   pressed: editor.isActive("strike"),
    //   label: "Doorstrepen",
    // },
  ]

 return (
    <div className="mb-2 flex flex-wrap gap-1 rounded-md border bg-background p-2">
      {options.map((option, index) => (
        <Toggle
          key={index}
          type="button"
          pressed={option.pressed}
          onClick={option.onClick}
          aria-label={option.label}
          title={option.label}
        >
          {option.icon}
        </Toggle>
      ))}
    </div>
  )
}
    
