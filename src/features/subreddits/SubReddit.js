export const SubReddit = ({subReddit}) => {
  return (
    <div id="sub" className="d-flex flex-row p-1 rounded">
      <img id="logo" className="rounded-4" src={subReddit.icon_img || `https://api.adorable.io/avatars/25/${subReddit.display_name}` } alt={`${subReddit.display_name} logo`}/>
      <p className="mx-2">{subReddit.display_name}</p>
    </div>
  )
}
