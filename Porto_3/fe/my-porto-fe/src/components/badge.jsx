const SkillBadge = ({ label, Icon }) => {
  return (
    <div className="h-fit w-fit flex items-center outline outline-white rounded-2xl px-2 py-1">
      <p className="text-[#E2E2B6] px-2">{label}</p>
      {Icon && <Icon className="min-h-4 min-w-4" />}
    </div>
  );
};

export default SkillBadge;
