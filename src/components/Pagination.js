import '../App.css';


const Pagination = ({totalPosts, postsPerPage}) => {
    const pageNumbers = [];

    for(let i=1; i<=Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
        console.log(i);
    }
  return (
    <nav className="pagination">
      {pageNumbers.length > 0 ? (
        <ul className="pagination-list">
          <li>
            <a href="!#">
              <svg class="svg-icon" viewBox="0 0 20 20">
                <path
                  fill="none"
                  d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"
                ></path>
              </svg>
            </a>
          </li>
          {pageNumbers.map((number) => {
            return (
              <li className="pagination-item">
                <a href="!#" className="pagination-link">
                  {number}
                </a>
              </li>
            );
          })}
          <li>
            <a href="!#">
              <svg class="svg-icon" viewBox="0 0 20 20">
                <path
                  fill="none"
                  d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      ) : (
        ""
      )}
    </nav>
  );
}

export default Pagination