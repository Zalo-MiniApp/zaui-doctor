export function formatPrice(price: number) {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    currencyDisplay: 'code',
  }).format(price);
}

export const formatDayName = (date: Date) => {
  const days = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
  return days[date.getDay()];
};

export const formatShortDate = (date: Date) => {
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${month}.${day}`;
};

export const formatTimeSlot = (hour: number, half?: boolean) => {
  return `${hour.toString().padStart(2, '0')}:${half ? '30' : '00'}`;
};
