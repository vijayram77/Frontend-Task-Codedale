import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function CustomAccordion({ title, content, openTrigger, closeTrigger }) {
    return (
        <Accordion
            type="multiple"
            collapsible
            className="w-full bg-background border border-foreground/10 shadow px-2 rounded-4xl"
        >
            <AccordionItem value="item-1">
                <div className="flex justify-between items-center">
                    <h1>{title}</h1>
                    <AccordionTrigger openIcon={openTrigger} closeIcon={closeTrigger}></AccordionTrigger>
                </div>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    {content}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
