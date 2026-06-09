'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from "@/components/rich-text-editor/menu-bar"
import TextAlign from "@tiptap/extension-text-align"
import Highlight from "@tiptap/extension-highlight"
import { TableKit } from '@tiptap/extension-table'
import { useCallback } from 'react'
import Image from "@tiptap/extension-image"
import Blockquote from '@tiptap/extension-blockquote'

const Tiptap = () => {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: {
                    levels: [1, 2, 3],
                },
            }),
            Highlight,
            
            TableKit.configure({
                table: {
                    resizable: true,
                },
            }),
            
            TextAlign.configure({
                types: ['heading', 'paragraph'],

            }),
            

            Image.configure({
                HTMLAttributes: {
                    // class: "rounded-lg max-w-full h-auto",
                    class: "rounded max-h-64 w-full object-cover",
                    resize: {
                        enabled: true,
                        directions: ['top', 'bottom', 'left', 'right'], // can be any direction or diagonal combination
                        minWidth: 50,
                        minHeight: 50,
                        alwaysPreserveAspectRatio: true,
                    },
                },
            }),
            Blockquote.configure({
                HTMLAttributes: {
                    class: 'my-custom-class',
                },
            })
            
        ],
        

        content: '<p>Schrijf hier je blog...</p>' , 
        immediatelyRender: false,
        editorProps: {
            attributes: {
                class: "min-h-[300px] w-full rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
            },
        },
        
    })
    

    return (
        <div>
            
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />

            <div className="button-group">
                <button
                    onClick={() =>
                        editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
                    }
                >
                    Insert table
                </button>
                <button onClick={() => editor.chain().focus().addColumnBefore().run()}>
                    Add column before
                </button>
                <button onClick={() => editor.chain().focus().addColumnAfter().run()}>
                    Add column after
                </button>
                <button onClick={() => editor.chain().focus().deleteColumn().run()}>Delete column</button>
                <button onClick={() => editor.chain().focus().addRowBefore().run()}>
                    Add row before
                </button>
                <button onClick={() => editor.chain().focus().addRowAfter().run()}>Add row after</button>
                <button onClick={() => editor.chain().focus().deleteRow().run()}>Delete row</button>
                <button onClick={() => editor.chain().focus().deleteTable().run()}>Delete table</button>
                <button onClick={() => editor.chain().focus().mergeCells().run()}>Merge cells</button>
                <button onClick={() => editor.chain().focus().splitCell().run()}>Split cell</button>
                <button onClick={() => editor.chain().focus().toggleHeaderColumn().run()}>
                    Toggle header column
                </button>
                <button onClick={() => editor.chain().focus().toggleHeaderRow().run()}>
                    Toggle header row
                </button>
                <button onClick={() => editor.chain().focus().toggleHeaderCell().run()}>
                    Toggle header cell
                </button>
                <button onClick={() => editor.chain().focus().mergeOrSplit().run()}>
                    Merge or split
                </button>
                <button onClick={() => editor.chain().focus().setCellAttribute('colspan', 2).run()}>
                    Set cell attribute
                </button>
                <button onClick={() => editor.chain().focus().fixTables().run()}>Fix tables</button>
                <button onClick={() => editor.chain().focus().goToNextCell().run()}>
                    Go to next cell
                </button>
                <button onClick={() => editor.chain().focus().goToPreviousCell().run()}>
                    Go to previous cell
                </button>
            </div>
        </div>
    )
}

export default Tiptap
