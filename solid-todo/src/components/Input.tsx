import { createSignal } from "solid-js";
// css 모듈로 쓰는 걸 솔리드에서 강제하지는 않음.
import styles from "./Input.module.css";

interface InputProps {
  placeHolder?: string;
  onConfirm?: (text: string) => void;
}

// 일반 객체가 아니라 내부에서 반응성 추적하는 프록시라서 얘도 일종의 시그널.
// 스프레드 시켜버리면 새로운 변수에 할당하는 거라 솔리드가 추적 불가.
// props 자체는 프록시 객체 래핑하는 거고 그 안의 애들이 시그널로 작동함. props.placeHolder, props.onConfirm 각각이 시그널
const Input = (props: InputProps) => {
  // 아래 createSignal를 input 스코프 밖으로 빼면 전역 변수가 됨.
  const [text, setText] = createSignal("");

  return (
    <input
      class={styles.input}
      value={text()}
      // e.target으로 하면 타입스크립트에서 추적 불가. 타겟이 뭐가 될지 타입스크립트가 모르고 브라우저만 앎.
      // solid에서 currentTarget으로 래핑해줘서 추적 대상 알려줌.
      onInput={(e) => setText(e.currentTarget.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          if (e.isComposing) return; // onKeyDown이 영어 아닌 언어에 대해선 두 번 실행됨. 해당 경우 방지

          props.onConfirm?.(text());
          setText("");
        }
      }}
      placeholder={props.placeHolder}
    />
  );
};

export default Input;
