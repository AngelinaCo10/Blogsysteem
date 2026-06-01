"use client"

import Image from "next/image"
import { type ChangeEvent, useEffect, useRef, useState } from "react"
import { ImagePlus, Trash2, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldLabel } from "../ui/field"
import { Input } from "../ui/input"

export function ImageUploadCard() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [fileName, setFileName] = useState("")
  const [altText, setAltText] = useState("")

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl)
    }
  }, [])

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]

    if (!file) {
      return
    }

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl)
    }

    setPreviewUrl(URL.createObjectURL(file))
    setFileName(file.name)
  }

  function clearImage() {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl)
    }

    setPreviewUrl(null)
    setFileName("")
    setAltText("")

    if (inputRef.current) {
      inputRef.current.value = ""
    }
  }

  return (
    <Card className="p-6">
      <CardHeader className="px-0">
        <CardTitle>Uitgelichte afbeelding</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <input
          ref={inputRef}
          id="featured-image"
          name="featuredImage"
          type="file"
          accept="image/*"
          className="sr-only"
          onChange={handleFileChange}
        />

        {previewUrl ? (
          <div className="space-y-3">
            <div className="relative aspect-video overflow-hidden rounded-lg border bg-muted">
              <Image
                src={previewUrl}
                alt={altText}
                fill
                sizes="320px"
                unoptimized
                className="object-cover"
              />
            </div>
            <div className="flex items-center justify-between gap-3">
              <p className="truncate text-sm text-muted-foreground">
                {fileName}
              </p>
              <Button
                type="button"
                variant="outline"
                size="icon-sm"
                aria-label="Afbeelding verwijderen"
                onClick={clearImage}
              >
                <Trash2 />
              </Button>


            </div>
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => inputRef.current?.click()}
            >
              <Upload />
              Vervangen
            </Button>
          </div>
        ) : (
          <button
            type="button"
            className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-lg border border-dashed bg-muted/40 p-4 text-center transition-colors hover:bg-muted"
            onClick={() => inputRef.current?.click()}
          >
            <span className="flex size-10 items-center justify-center rounded-full bg-background ring-1 ring-border">
              <ImagePlus className="size-5" />
            </span>
            <span className="text-sm font-medium">Afbeelding uploaden</span>
            <span className="text-xs text-muted-foreground">
              
              of sleep een afbeelding hierheen om te uploaden
              <br /> <br />PNG, JPG of WebP
            </span>
          </button>
        )}

        {/* Alt text input */}
        <Field orientation="horizontal">
          <FieldLabel htmlFor="checkout-7j9-card-name-43j">
            Alt-tekst
          </FieldLabel>
          <Input
            id="checkout-7j9-card-name-43j"
            placeholder="Alt-tekst toevoegen"
            required
            value={altText}
            onChange={(e) => setAltText(e.target.value)}
            className="w-4/6 mt-2"
          />
        </Field>
      </CardContent>
    </Card>
  )
}
