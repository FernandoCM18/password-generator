interface Props {
  text: string;
  copyClipboard: () => void;
}

export const Label = ({text, copyClipboard}: Props) => {
  const handleCopyClipboard = () => {
    if (text.length === 0) return;
    copyClipboard();
  };
  return (
    <div className="flex justify-between items-center bg-gray-100 dark:bg-slate-800 p-5">
      <p className="text-gray-500 break-all max-w-[200px]">{text || 'Genera una contraseña'}</p>
      <div onClick={handleCopyClipboard} className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-slate-700">
        <svg className={`${text ? 'fill-blue-600' : 'fill-gray-500'} ${text.length === 0 && 'cursor-not-allowed'}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H13C13.2652 3 13.5196 3.10536 13.7071 3.29289C13.8946 3.48043 14 3.73478 14 4V5C14 5.55228 14.4477 6 15 6C15.5523 6 16 5.55228 16 5V4C16 3.20435 15.6839 2.44129 15.1213 1.87868C14.5587 1.31607 13.7956 1 13 1H4C3.20435 1 2.44129 1.31607 1.87868 1.87868C1.31607 2.44129 1 3.20435 1 4V13C1 13.7956 1.31607 14.5587 1.87868 15.1213C2.44129 15.6839 3.20435 16 4 16H5C5.55228 16 6 15.5523 6 15C6 14.4477 5.55228 14 5 14H4C3.73478 14 3.48043 13.8946 3.29289 13.7071C3.10536 13.5196 3 13.2652 3 13V4C3 3.73478 3.10536 3.48043 3.29289 3.29289ZM10 11C10 10.4477 10.4477 10 11 10H20C20.5523 10 21 10.4477 21 11V20C21 20.5523 20.5523 21 20 21H11C10.4477 21 10 20.5523 10 20V11ZM11 8C9.34315 8 8 9.34315 8 11V20C8 21.6569 9.34315 23 11 23H20C21.6569 23 23 21.6569 23 20V11C23 9.34315 21.6569 8 20 8H11Z"/>
        </svg>
      </div> 
    </div>
  );
};