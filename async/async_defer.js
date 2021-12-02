/* 
HTML은 코드 한줄 씩 Parsing 해가며 화면에 출력을 해주는데
코드 중간에 소스코드를 불러오는 파일이 있으면
이를 Parsing하는 방법이 2가지가 있다.
async와 defer라는 방식인데,

async는 코드를 Parsing하는 동안 다운을 다 받게되면 코드를 Parsing하는
작업 중간에 데이터를 넣는다.

<script async src = "a.js"><script>
<script async src = "b.js"><script>
<script async src = "c.js"><script>

이와 같이 a,b,c라는 파일이 있다.
파일들을 async를 이용하여 다운을 받아 출력을 하게되면,
코드 순서와는 상관없이 가장 빨리 다운받아진 파일이 먼저 실행되게 된다.

defer는 코드를 Parsing하는 동안 다운을 다 받게되면,
HTML 코드의 Parsing이 끝난 후에 파일을 순서대로 불러온다.

<script defer src = "a.js"><script>
<script defer src = "b.js"><script>
<script defer src = "c.js"><script>

이와 같이 a,b,c라는 파일이 있다.
파일들을 defer를 이용하여 다운을 받아 출력을 하게되면,
어떤 파일이 가장 빨리 다운받아 지더라도,
코드 순서와 똑같이 파일이 보여지게 된다.
파일이 보여지는 순서 = a -> b -> c 
*/

