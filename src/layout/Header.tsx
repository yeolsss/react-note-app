import { StHeader, StSubTitle, StTitle } from "../styles/header/header";

function Header() {
  //TODO: theme button 어디에?
  /**
   * 새 글 쓰기면 Note1이 input으로 바뀌고
   * contents 영역은 textarea로 변경
   * text editor? 어떤거?
   * 이거 투두가 아니고 노트인데..?
   * 아무렴 어때 그냥 하고보자.
   * 일단 레이아웃부터..
   *
   * 수정 버튼 고려할것
   */
  return (
    <StHeader>
      <StTitle>
        <div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class=" h-6 w-6 text-yellow-500 dark:text-yellow-300"
              data-id="4"
            >
              <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"></path>
              <path d="M15 3v6h6"></path>
            </svg>
          </div>
          <h1>Notes</h1>
        </div>
      </StTitle>
      <StSubTitle>
        <div>
          <div>
            {/* note title */}
            <h1>Note 1</h1>
          </div>
        </div>
      </StSubTitle>
    </StHeader>
  );
}

export default Header;
