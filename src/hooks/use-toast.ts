import { useState } from 'react'

export interface Toast {
  id: string
  title?: string
  description?: string
  action?: React.ReactNode
  variant?: 'default' | 'destructive'
}

interface ToastState {
  toasts: Toast[]
}

const toastState: ToastState = {
  toasts: [],
}

let listeners: Array<(state: ToastState) => void> = []

export function useToast() {
  const [state, setState] = useState<ToastState>(toastState)

  const toast = (props: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast = { ...props, id }

    toastState.toasts = [...toastState.toasts, newToast]
    listeners.forEach((listener) => listener(toastState))

    // Auto dismiss after 5 seconds
    setTimeout(() => {
      dismiss(id)
    }, 5000)

    return {
      id,
      dismiss: () => dismiss(id),
      update: (props: Partial<Toast>) => update(id, props),
    }
  }

  const dismiss = (toastId?: string) => {
    if (!toastId) {
      toastState.toasts = []
    } else {
      toastState.toasts = toastState.toasts.filter(t => t.id !== toastId)
    }
    listeners.forEach((listener) => listener(toastState))
  }

  const update = (toastId: string, props: Partial<Toast>) => {
    toastState.toasts = toastState.toasts.map(t =>
      t.id === toastId ? { ...t, ...props } : t
    )
    listeners.forEach((listener) => listener(toastState))
  }

  return {
    toasts: state.toasts,
    toast,
    dismiss,
  }
}