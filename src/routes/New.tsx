import Editor from '@/lexical/Editor';

export default function New() {
  return <Editor namespace="foobar" onError={console.error} />;
}
