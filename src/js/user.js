export default function test1(data){
  if (data.health <= 100 && data.health > 50){
    return 'healthy';
  } else if (data.health <= 50 && data.health >= 15) {
    return 'wounded';
  } else if (data.health < 15 && data.health >= 0) {
    return 'critical';
  }
}