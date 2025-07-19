import { ref, onMounted } from 'vue'

export const useScrollTrigger = (elRef) => {
  const isVisible = ref(false)
  
  onMounted(() => {
    const observer = new IntersectionObserver(([entry]) => {
      isVisible.value = entry.isIntersecting
    }, { threshold: 0.15 })
    observer.observe(elRef.value)
  })

  return { isVisible }
}
