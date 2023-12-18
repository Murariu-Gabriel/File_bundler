const Loading = ({ isLoading }) => {
  return <div className={`${isLoading ? "" : "hide"}`}> Loading...</div>
}
export default Loading