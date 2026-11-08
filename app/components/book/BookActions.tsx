"use client";

import { AiOutlineAudio, AiOutlineRead } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/store";
import Skeleton from "../UI/Skeleton";
import { useRouter } from "next/navigation";
import { openModal } from "../../Redux/slices/modalSlice";

interface BookActionsProps {
  id: string;
  subscriptionRequired: boolean;
}

export default function BookActions({ id, subscriptionRequired }: BookActionsProps) {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const user = useSelector((state: RootState) => state.userSlice.user);
  const isLoading = useSelector((state: RootState) => state.userSlice.isLoading);
  const isSubscribed = false;

  const actions = [
    { label: "Read", icon: <AiOutlineRead /> },
    { label: "Listen", icon: <AiOutlineAudio /> },
  ];

  const handleClick = () => {
    if (!user) {
      dispatch(openModal());
      return;
    }
    if (subscriptionRequired && !isSubscribed) {
      router.push("/choose-plan");
      return;
    }
    return router.push(`/player/${id}`);
  };

  if (isLoading) return <Skeleton className="w-76 h-12 mb-6" />;

  return (
    <div className="flex gap-4 mb-6">
      {actions.map((action) => (
        <button
          key={action.label}
          className="flex items-center justify-center w-36 h-12 text-white text-base rounded-sm gap-2 transition-opacity hover:opacity-80 duration-200 bg-navy cursor-pointer"
          onClick={() => handleClick()}
        >
          <span className="text-2xl flex">{action.icon}</span>
          {action.label}
        </button>
      ))}
    </div>
  );
}
