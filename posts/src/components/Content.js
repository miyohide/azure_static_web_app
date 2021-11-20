import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BodyCard from './BodyCard';
import axios from 'axios';

function Content() {
  // Reactのステートフックを利用してstate変数であるpostを初期化し、
  // 更新するsetPosts関数を取得する。
  // ここでは、postを[]で初期化する
  const [post, setPosts] = useState([])

  // useEffectを利用してJSONデータを取得してsetPostsでstate変数である
  // postを更新する
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      setPosts(res.data)
    })
  }, [])

  // 名前付き関数（アロー関数式を使った記述）
  const getCardContent = getObj => {
    return (
      <Col key={getObj.id}>
        {/* スプレッド構文。getObjのすべての要素をBodyCardのproperty（props）に渡す */}
        <BodyCard {...getObj} />
      </Col>
    );
  };
  return (
    <Container>
      <Row xs={1} md={3} className="g-2">
        {/* map() は与えられた関数を配列の全ての要素に対して呼び出し、
            その結果からなる新しい配列を生成する
        */}
        {post.map(contentObj => getCardContent(contentObj))}
      </Row>
    </Container>
  );
}

export default Content;
