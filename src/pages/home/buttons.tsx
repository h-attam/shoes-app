const Buttons = ({ open }: { open: () => void }) => {
    return (
      <div className="mt-5 flex gap-5 lg:hidden">
        <button
          onClick={open}
          className="flex-1 bg-white rounded-md p-2 px-4 flex gap-4 items-center justify-between"
        >
          Filtreler
          <img src="/lines.svg" />
        </button>
  
        <button className="flex-1 bg-white rounded-md p-2 px-4 flex gap-4 items-center justify-between">
          Sırala
          <img src="/down.svg" />
        </button>
      </div>
    );
  };
  
  export default Buttons;