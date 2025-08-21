import React, { useState } from 'react';
import { useTodo } from './TodoProvider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  CheckCircle2, 
  Circle, 
  Trash2, 
  Edit3, 
  Calendar,
  Tag,
  AlertCircle,
  Clock,
  Sparkles,
  Target
} from 'lucide-react';

const TodoList = () => {
  const { todos, loading, error, addTodo, updateTodo, deleteTodo, toggleTodo } = useTodo();
  const [showForm, setShowForm] = useState(false);
  const [editingTodo, setEditingTodo] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium' as 'low' | 'medium' | 'high',
    dueDate: '',
    tags: ''
  });

  const priorityColors = {
    low: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300 border-blue-200 dark:border-blue-800',
    medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800',
    high: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300 border-red-200 dark:border-red-800'
  };

  const priorityIcons = {
    low: <Clock className="h-3 w-3" />,
    medium: <Target className="h-3 w-3" />,
    high: <AlertCircle className="h-3 w-3" />
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const todoData = {
        ...formData,
        tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()) : [],
        dueDate: formData.dueDate || undefined
      };

      if (editingTodo) {
        await updateTodo(editingTodo, todoData);
        setEditingTodo(null);
      } else {
        await addTodo(todoData);
      }

      setFormData({
        title: '',
        description: '',
        priority: 'medium',
        dueDate: '',
        tags: ''
      });
      setShowForm(false);
    } catch (error) {
      console.error('Error saving todo:', error);
    }
  };

  const handleEdit = (todo: any) => {
    setEditingTodo(todo._id);
    setFormData({
      title: todo.title,
      description: todo.description || '',
      priority: todo.priority,
      dueDate: todo.dueDate ? new Date(todo.dueDate).toISOString().split('T')[0] : '',
      tags: todo.tags ? todo.tags.join(', ') : ''
    });
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingTodo(null);
    setFormData({
      title: '',
      description: '',
      priority: 'medium',
      dueDate: '',
      tags: ''
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="text-center space-y-4">
          <div className="h-12 w-12 animate-spin rounded-full border-3 border-primary border-t-transparent mx-auto"></div>
          <p className="text-muted-foreground">Loading your tasks...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Enhanced Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <Target className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground">My Tasks</h2>
          </div>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>{todos.length} total task{todos.length !== 1 ? 's' : ''}</span>
            </span>
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>{todos.filter(t => t.completed).length} completed</span>
            </span>
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span>{todos.filter(t => !t.completed).length} pending</span>
            </span>
          </div>
        </div>
        <Button
          onClick={() => setShowForm(true)}
          className="flex items-center space-x-2 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
        >
          <Plus className="h-4 w-4" />
          <span>Add Task</span>
        </Button>
      </div>

      {/* Error Display */}
      {error && (
        <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive flex items-center space-x-2">
          <AlertCircle className="h-4 w-4" />
          <span>{error}</span>
        </div>
      )}

      {/* Enhanced Add/Edit Form */}
      {showForm && (
        <Card className="border-border/50 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20">
                <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <CardTitle className="text-xl">
                  {editingTodo ? 'Edit Task' : 'Add New Task'}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {editingTodo ? 'Update your task details below' : 'Create a new task to stay organized'}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-sm font-medium">Task Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="What needs to be done?"
                  className="border-border/50 focus:border-primary/50 focus:ring-primary/20"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-sm font-medium">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Add more details about this task..."
                  rows={3}
                  className="border-border/50 focus:border-primary/50 focus:ring-primary/20"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="priority" className="text-sm font-medium">Priority Level</Label>
                  <Select
                    value={formData.priority}
                    onValueChange={(value: 'low' | 'medium' | 'high') => 
                      setFormData(prev => ({ ...prev, priority: value }))
                    }
                  >
                    <SelectTrigger className="border-border/50 focus:border-primary/50 focus:ring-primary/20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low Priority</SelectItem>
                      <SelectItem value="medium">Medium Priority</SelectItem>
                      <SelectItem value="high">High Priority</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dueDate" className="text-sm font-medium">Due Date</Label>
                  <Input
                    id="dueDate"
                    type="date"
                    value={formData.dueDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, dueDate: e.target.value }))}
                    className="border-border/50 focus:border-primary/50 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags" className="text-sm font-medium">Tags</Label>
                <Input
                  id="tags"
                  value={formData.tags}
                  onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
                  placeholder="work, personal, urgent (comma separated)"
                  className="border-border/50 focus:border-primary/50 focus:ring-primary/20"
                />
                <p className="text-xs text-muted-foreground">Separate multiple tags with commas</p>
              </div>

              <div className="flex space-x-3 pt-2">
                <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-200">
                  {editingTodo ? 'Update Task' : 'Create Task'}
                </Button>
                <Button type="button" variant="outline" onClick={handleCancel} className="border-border/50 hover:bg-secondary/50">
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Enhanced Todo List */}
      <div className="space-y-4">
        {todos.length === 0 ? (
          <Card className="border-dashed border-border/50 bg-secondary/20">
            <CardContent className="text-center py-16">
              <div className="mx-auto w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mb-4">
                <Circle className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">No tasks yet</h3>
              <p className="text-muted-foreground mb-4">Get started by creating your first task to stay organized</p>
              <Button onClick={() => setShowForm(true)} className="bg-primary hover:bg-primary/90">
                <Plus className="h-4 w-4 mr-2" />
                Create Your First Task
              </Button>
            </CardContent>
          </Card>
        ) : (
          todos.map((todo) => (
            <Card key={todo._id} className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm ${
              todo.completed ? 'opacity-75 bg-muted/20' : ''
            }`}>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <button
                    onClick={() => toggleTodo(todo._id)}
                    className="mt-1 text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110"
                  >
                    {todo.completed ? (
                      <CheckCircle2 className="h-6 w-6 text-green-500" />
                    ) : (
                      <Circle className="h-6 w-6 hover:text-primary" />
                    )}
                  </button>

                  <div className="flex-1 min-w-0 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-lg font-semibold text-foreground ${
                          todo.completed ? 'line-through text-muted-foreground' : ''
                        }`}>
                          {todo.title}
                        </h3>
                        
                        {todo.description && (
                          <p className={`text-sm mt-2 text-muted-foreground leading-relaxed ${
                            todo.completed ? 'line-through' : ''
                          }`}>
                            {todo.description}
                          </p>
                        )}

                        <div className="flex flex-wrap items-center gap-3 mt-3">
                          <Badge className={`${priorityColors[todo.priority]} border flex items-center space-x-1`}>
                            {priorityIcons[todo.priority]}
                            <span className="capitalize">{todo.priority}</span>
                          </Badge>
                          
                          {todo.dueDate && (
                            <div className="flex items-center text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded-md">
                              <Calendar className="h-3 w-3 mr-1" />
                              {formatDate(todo.dueDate)}
                            </div>
                          )}

                          {todo.tags.length > 0 && (
                            <div className="flex items-center text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded-md">
                              <Tag className="h-3 w-3 mr-1" />
                              {todo.tags.join(', ')}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEdit(todo)}
                          className="h-8 w-8 p-0 hover:bg-blue-100 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          <Edit3 className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteTodo(todo._id)}
                          className="h-8 w-8 p-0 hover:bg-red-100 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;
