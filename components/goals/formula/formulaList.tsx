"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getFormula } from "./postFormula";
import { postFormula } from "./postFormula";
import { useParams } from "next/navigation";

export function FormulaList() {
  const params = useParams<{ goalId: string }>();
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["formula"],
    queryFn: () => getFormula(params.goalId),
  });

  const mutation = useMutation({
    mutationFn: postFormula,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["formula"] });
    },
    
  });
  return (
    <div className="fl-container_part-2-list-of-formula h-1/2 sm:h-full flex sm:w-1/2 gap-3 bg-zinc-300/5 content-around p-2 overflow-auto flex-wrap justify-start">
      {query.data?.map((formula: { f: string; id: string }) => (
        <div
          className="elem-of-formula-list border-1 border-zinc-600 rounded-lg flex-col p-1 items-center justify-center "
          key={formula.id}
        >
          <p className="formula-name"> {formula.f}</p>
          <center>
            <button
              className="formula-delete-button self-center bg-red-600/10 w-full"
              type="button"
              onClick={() => {
                const idList = {
                  goal_id: params.goalId,
                  formula_id: formula.id,
                };
                mutation.mutate(idList);
              }}
            >
              x
            </button>
          </center>
        </div>
      ))}
    </div>
  );
}
