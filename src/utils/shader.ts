// 创建着色器方法，输入参数：渲染上下文，着色器类型，数据源
export function createShader(gl: GL, type: number, source: any) {
  const shader = gl.createShader(type)! // 创建着色器对象
  gl.shaderSource(shader, source) // 提供数据源
  gl.compileShader(shader) // 编译 -> 生成着色器
  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
  if (success) {
    return shader
  }

  console.log('shader info', gl.getShaderInfoLog(shader))
  gl.deleteShader(shader)
}

export function createProgram(gl: GL, vertexShader: any, fragmentShader: any) {
  const program = gl.createProgram()!
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)
  const success = gl.getProgramParameter(program, gl.LINK_STATUS)
  return program
  // if (success) {
  //   return program
  // }

  // console.log('program info', gl.getProgramInfoLog(program))
  // gl.deleteProgram(program)
}
