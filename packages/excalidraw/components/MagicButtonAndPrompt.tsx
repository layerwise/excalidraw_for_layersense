import clsx from "clsx";

import "./ToolIcon.scss";
import { ElementCanvasButton } from "./MagicButton";  

import type { ToolButtonSize } from "./ToolButton";
import type { JSX } from "react";

//import { useAtom } from "../editor-jotai";
//import { atom } from "../editor-jotai";
//const promptAtom = atom("");

const DEFAULT_SIZE: ToolButtonSize = "small";

export const ElementCanvasButtonAndPrompt = (props: {
  title?: string;
  icon: JSX.Element;
  name?: string;
  checked: boolean;
  onChange?(): void;
  isMobile?: boolean;
  prompt?: string;
  onPromptChange?: (prompt: string | null) => void;
}) => {
  //const [prompt, setPrompt] = useAtom(promptAtom);

  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const prompt = e.target.value;
    if (props.onPromptChange) {
      props.onPromptChange(prompt);
    }
  };

  return (
    <div>
      <ElementCanvasButton
        title={props.title}
        icon={props.icon}
        checked={props.checked}
        onChange={props.onChange}
      />
      <textarea
        value={props.prompt ?? ""}
        //onChange={(e) => setPrompt(e.target.value)}
        onChange={handlePromptChange}
        placeholder="Enter a prompt"
      />
    </div>
  );
};
