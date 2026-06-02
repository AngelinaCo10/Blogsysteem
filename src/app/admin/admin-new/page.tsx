"use client"
import { ImageUploadCard } from "@/components/admin/image-upload-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldContent,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { X } from "lucide-react"
export default function FieldDemo() {

  const [tags, setTags] = useState<string[]>([])
  const [input, setInput] = useState("")
  function addTag() {
    const trimmed = input.trim()
    if (!trimmed || tags.includes(trimmed)) return
    setTags([...tags, trimmed])
    setInput("")
  }

  function removeTag(tag: string) {
    setTags(tags.filter((t) => t !== tag))
  }

  const [categories, setCategories] = useState([
    "Niet gecategoriseerd",
    "2B Green Nieuws en Informatie",
    "Duurzaamheid",
    "Laden en Elektrisch rijden",
    "Groendaken en Dakbedekking",
  ])
  const [selectedCategory, setSelectedCategory] = useState("Niet gecategoriseerd")
  const [newCategory, setNewCategory] = useState("")
  const [showInput, setShowInput] = useState(false)
  function addCategory() {
    const trimmed = newCategory.trim()
    if (!trimmed || categories.includes(trimmed)) return
    setCategories([...categories, trimmed])  // voeg toe aan de lijst
    setSelectedCategory(trimmed)             // selecteer meteen de nieuwe
    setNewCategory("")
    setShowInput(false)
  }
  return (
    <div className="w-4/5 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4 px-4 py-6 max-w-5xl mx-auto items-start">
      <div className="flex flex-col gap-4">
        <Card className="p-6">
          <form>
            <FieldGroup>
              <FieldSet>
                {/* <FieldLegend>Payment Method</FieldLegend> */}
                {/* <FieldDescription>
              All transactions are secure and encrypted
            </FieldDescription> */}
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                      Titel
                    </FieldLabel>
                    <Input
                      id="checkout-7j9-card-name-43j"
                      placeholder="Titel toevoegen"
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="checkout-7j9-optional-comments">
                      Intro
                    </FieldLabel>
                    <Textarea
                      id="checkout-7j9-optional-comments"
                      placeholder="Add any additional comments"
                      className="resize-none"
                    />
                  </Field>
                  <Field>
                    <Textarea
                      id="feedback"
                      placeholder="Your feedback helps us improve..."
                      rows={4}
                    />
                  </Field>

                </FieldGroup>
              </FieldSet>
              {/* <Field orientation="horizontal">
                <Button type="submit">Submit</Button>
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </Field> */}
            </FieldGroup>
          </form>
        </Card>

        {/* Metadata */}

        <Card>
          <CardHeader>
            <CardTitle>Zoekmachinevermelding</CardTitle>
          </CardHeader>
          <CardContent>
            <FieldSet>
              <FieldGroup>
                <Field>
                  <div className="grid grid-cols-3 gap-4">
                    <Card
                      className="border p-4 shadow-sm md:col-span-1"
                    >
                      <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                        Voorbeeld
                      </FieldLabel>
                    </Card>
                  </div>

                  <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                    Metatitel
                  </FieldLabel>
                  <Input
                    id="checkout-7j9-card-name-43j"
                    placeholder="Titel toevoegen"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                    Slug
                  </FieldLabel>
                  <Input
                    id="checkout-7j9-card-name-43j"
                    placeholder="Titel toevoegen"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                    Metabeschrijving
                  </FieldLabel>
                  <Input
                    id="checkout-7j9-card-name-43j"
                    placeholder="Titel toevoegen"
                    required
                  />
                </Field>
              </FieldGroup>
            </FieldSet>
          </CardContent>
        </Card>
      </div>

      {/* Status */}

      <div className="flex flex-col gap-4">
        <Card className="p-6">
          <RadioGroup defaultValue="comfortable" className="w-fit">
            <Field orientation="horizontal">
              <RadioGroupItem value="default" id="desc-r1" />
              <FieldContent>
                <FieldLabel htmlFor="desc-r1">Concept</FieldLabel>
                <FieldDescription>
                  Als concept opslaan. Niet klaar om te publiceren.
                </FieldDescription>
              </FieldContent>
            </Field>
            <Field orientation="horizontal">
              <RadioGroupItem value="comfortable" id="desc-r2" />
              <FieldContent>
                <FieldLabel htmlFor="desc-r2">Gepubliceerd</FieldLabel>
                <FieldDescription>Nu publiceren. Zichtbaar voor iedereen.</FieldDescription>
              </FieldContent>
            </Field>
            <Field orientation="horizontal">
              <RadioGroupItem value="compact" id="desc-r3" />
              <FieldContent>
                <FieldLabel htmlFor="desc-r3">Ingepland</FieldLabel>
                <FieldDescription>
                  Automatisch publiceren op een gekozen datum.
                </FieldDescription>
              </FieldContent>
            </Field>
          </RadioGroup>
        </Card>

        {/* Upload image component */}
        <ImageUploadCard />

        {/* Category */}

        <Card className="p-6">
          <CardHeader className="px-0">
            <CardTitle>Categorie</CardTitle>
          </CardHeader>

          <RadioGroup
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="w-fit"
          >
            {categories.map((cat) => (
              <Field key={cat} orientation="horizontal">
                <RadioGroupItem value={cat} id={cat} />
                <FieldContent>
                  <FieldLabel htmlFor={cat}>{cat}</FieldLabel>
                </FieldContent>
              </Field>
            ))}
          </RadioGroup>

          {/* Nieuwe categorie toevoegen */}

          <div className="mt-4 space-y-2">
            {showInput ? (
              <Field>
                <Input
                  placeholder="Nieuwe categorie"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addCategory()}
                />
                <Field orientation="horizontal" className="">
                  <Button type="button" onClick={addCategory}>
                    Toevoegen
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setShowInput(false)}
                  >
                    Annuleren
                  </Button>
                </Field>
              </Field>
            ) : (
              <Button
                type="button"
                variant="ghost"
                className="text-sm"
                onClick={() => setShowInput(true)}
              >
                + Nieuwe categorie
              </Button>
            )}
          </div>
        </Card>

        {/* Tags */}

        <Card className="p-6">
          <CardHeader className="px-0">
            <CardTitle>Tags</CardTitle>
          </CardHeader>
          <div className="space-y-3">
            <Field orientation="horizontal">
              <Input
                placeholder="Tag toevoegen"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addTag()}
              />
              <Button
                type="button"
                className="bg-[#415732] text-white hover:bg-[#CDD12A]"
                onClick={addTag}
              >
                Toevoegen
              </Button>
            </Field>

            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="gap-1">
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      aria-label={`${tag} verwijderen`}
                    >
                      <X className="size-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  )

}

