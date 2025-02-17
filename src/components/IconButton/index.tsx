import { ReactNode } from "react"
import { Button, Label } from "./style"

export function IconButton(
  props: {
    icon: ReactNode,
    label?: string,
    onClick: Function,
  }
) {
  return (
    <Button
      onPress={props.onClick}
    >
      {props.icon}
      <Label>{props.label}</Label>
    </Button>
  )
}