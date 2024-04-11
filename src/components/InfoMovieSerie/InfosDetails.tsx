function InfosDetails({ label, title }: { label: string; title: string | number }) {
  return (
    <div>
      <h3 className="font-bold">{label}</h3>
      <p className="text-white/60">{title}</p>
    </div>
  );
}

export default InfosDetails;
