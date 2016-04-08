export default function hanoi(i, src = 'A', tmp = 'B', dst = 'C') {
  const result = [];
  move(i, src, tmp, dst, result);
  return result;
}

function move(i, src, tmp, dst, result) {
  if (i > 0) {
    move(i - 1, src, dst, tmp, result);
    result.push(` move disc ${i} from ${src} to ${dst}`);
    move(i - 1, tmp, src, dst, result);
  }
}
