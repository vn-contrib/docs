import Editor from '@/components/Editor';

export default function New() {
  return <Editor namespace="foobar" onError={console.error} />;
}
