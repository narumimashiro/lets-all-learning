# JSXって見慣れないけど、実はHTMLにすごく似ている

JSX（JavaScript XML）は、JavaScriptの拡張構文であり、主にReactライブラリで使用されます。JSXは、HTMLライクな構文でJavaScriptを記述するためのもので、ReactコンポーネントのUI部分を宣言的に表現するのに役立ちます。

## 特徴とルール

1. **HTMLライクな構文**: JSXは、通常のJavaScriptの中にHTMLライクな構文を埋め込むことができます。これにより、コンポーネントのUI部分を記述する際に、HTMLに似た見た目でコードを書くことができます。

    ```jsx
    const element = <h1>Hello, JSX!</h1>;
    ```

2. **JavaScriptの式を埋め込み可能**: JSX内では、中括弧 `{}` を使用してJavaScriptの式を埋め込むことができます。これにより、変数や関数、算術演算子などを使って動的なコンテンツを生成することができます。

    ```jsx
    const name = "John";
    const element = <h1>Hello, {name}!</h1>;
    ```

3. **React要素の作成**: JSXはReact要素を作成するための構文でもあります。React要素は、UIの一部を表すオブジェクトであり、Reactがこれをもとに仮想DOMを構築し、最終的なDOMを生成します。

    ```jsx
    const element = <h1>Hello, JSX!</h1>;
    ```

4. **複数の要素をラップする**: JSXでは、複数の要素をラップするために必ずしもルート要素が必要ではありませんが、一つのルート要素で全体をラップすることが一般的です。

    ```jsx
    const element = (
      <div>
        <h1>Hello</h1>
        <p>Paragraph</p>
      </div>
    );
    ```

JSXはReactコンポーネントの記述をより直感的で読みやすくし、コードの可読性を向上させます。babelなどのトランスパイラを使用することで、JSXは通常のJavaScriptに変換され、ブラウザが理解できる形になります。
