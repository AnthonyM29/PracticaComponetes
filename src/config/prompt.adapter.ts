import prompt from 'react-native-prompt-android';

interface Options {
  title: string;
  buttons: PromptButton[];
  promptType?: 'default' | 'plain-text' | 'secure-text';
  placeholder?: string;
  subTitle?: string;
  defaulValue?: string;
}

interface PromptButton {
  text: string;
  onPress: () => void;
  style?: 'cancel' | 'defaul' | 'destructive';
}

export const showPrompt = ({
  title,
  promptType,
  buttons,
  placeholder,
  subTitle,
  defaulValue,
}: Options) => {
  prompt(title, subTitle, buttons, {
    type: promptType,
    cancelable: false,
    defaultValue: defaulValue,
    placeholder: placeholder,
  });
};
