
import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          error:
            "group toast group-[.toaster]:bg-destructive/15 group-[.toaster]:text-destructive group-[.toaster]:border-destructive/30",
          success:
            "group toast group-[.toaster]:bg-success/15 group-[.toaster]:text-success group-[.toaster]:border-success/30",
          warning:
            "group toast group-[.toaster]:bg-warning/15 group-[.toaster]:text-warning group-[.toaster]:border-warning/30",
          info:
            "group toast group-[.toaster]:bg-info/15 group-[.toaster]:text-info group-[.toaster]:border-info/30",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
