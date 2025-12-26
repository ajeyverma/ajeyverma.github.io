// Simple fade-in animation for achievements
document.addEventListener('DOMContentLoaded', function() {
  const achievements = document.querySelectorAll('.achievement');
  achievements.forEach((achievement, index) => {
    achievement.style.opacity = '0';
    achievement.style.transform = 'translateY(20px)';
    setTimeout(() => {
      achievement.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      achievement.style.opacity = '1';
      achievement.style.transform = 'translateY(0)';
    }, index * 200);
  });
});