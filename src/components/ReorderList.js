import { Reorder } from "motion/react"
import { Button } from "./Button";



function ReorderList({values , onReorder, attività, typeList , funzione , footer , icon}) {

  return (
      <Reorder.Group axis="y" values={values} className="flex h-full items-center justify-center w-full flex-col gap-3.5 text-neutral-50 font-medium" onReorder={onReorder}>
        <p className="text-xl">{attività}</p>
        <div className="flex phone:w-full flex-col h-full items-center justify-between overflow-y-scroll">
          <div className="flex flex-col gap-3.5 phone:self-center self-start">
            {typeList.map((item) => (
              <Reorder.Item value={item} key={item.id} className="cursor-grab">
            <span className={`${icon === '❌' ? 'line-through' : ""} mr-2`}>
              {item.description}
            </span>
                <Button className="text-neutral-50 bg-yellow-500 p-2 font-medium rounded-2xl text-sm hover:scale-110 transition duration-500"
                    onClick={() => funzione(item.id) }>
                 {icon}
                </Button>
              </Reorder.Item>
            ))}
          </div>
        </div>
        <p className="text-neutral-50 font-medium text-xl">
          <span className="mr-1">{footer} {typeList.length} attività!</span>
        </p>
      </Reorder.Group>
  );
}

export default ReorderList
